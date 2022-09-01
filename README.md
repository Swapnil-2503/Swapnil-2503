% Design Bandpass FIR filter of length N=7 and cutoff frequency wc1=pi/4 and wc2=3pi/4
clc;
clear all;
close all
N=7; % order/length of FIR filter
k=0:N-1 % samples
wk=2*pi*k/N % sampling frequency 
% find mod of H(k)
Hk = [0,1,1,0,0,1,1];
% find theta(k)
n1=0:(N-1)/2;
n2=(N+1)/2:N-1;
ang=[-((N-1)/N)*pi*n1, ((N-1)*pi)-((N-1)/N)*pi*n2];
% find H(k)
H=Hk.*exp(i*ang);
% desired impulse response h(n)/FIR filter IR
hn= real(ifft(H,N));
% Frequency response of FIR filter
[h1,w]=freqz(hn,1);
subplot(3,2,1)
stem(Hk);
xlabel("k");
ylabel(" Magnitude of H(k)");
subplot(3,2,2)
stem(ang);
xlabel("k");
ylabel(" Angle of H(k)");
subplot(3,2,3)
stem(hn);
xlabel("n");
ylabel(" Desired finite impulse response ");
subplot(3,2,4)
stem(w/pi,abs(h1));
xlabel("Normalised Frequency");
ylabel(" Frequency response");
% applying sinusoidal signal as input
t=0:1/511:1;
fs=511
x= 2*sin(2*pi*50*t)+4*sin(2*pi*120*t)+8*sin(2*pi*240*t);
% frequency domain information of "x"
y=fft(x);
f=(0:length(x)-1)*fs/length(x);
subplot(3,2,5)
stem(f,abs(y));
xlabel("frequency in Hz");
ylabel("Frequency response of input signal");
h1=h1'
yout=y.*h1;
subplot(3,2,6)
stem(f,abs(yout));
xlabel("frequency in Hz");
ylabel(" Frequency response of output signal");
